import React, {useEffect, useState} from 'react';
import ProductCard from '../Shared/ProductCard/ProductCard';
import {productController} from '../../controllers/product.controller';
import {cartStore} from "../../stores/cart.store";
import {inject, observer} from 'mobx-react';
import {GlobalProps} from '../../App';
import { RoutePath } from '../../routing/routes';
import { RouteUtils } from '../../routing/route-utils';
import { useHistory } from 'react-router-dom';

// const dummyProducts: ProductCardProps[] = [
//     { name: 'Lakme 9 to 5 CC - Honey', seller: 'Seller - Lalita Sales', oldPrice: '₹521', newPrice: '₹349' },
//     { name: 'Lakme 9 to 5 CC - Honey', seller: 'Seller - Lalita Sales', oldPrice: '₹521', newPrice: '₹349' },
//     { name: 'Lakme 9 to 5 CC - Honey', seller: 'Seller - Lalita Sales', oldPrice: '₹521', newPrice: '₹349' },
//     { name: 'Lakme 9 to 5 CC - Honey', seller: 'Seller - Lalita Sales', oldPrice: '₹521', newPrice: '₹349' },
//     { name: 'Lakme 9 to 5 CC - Honey', seller: 'Seller - Lalita Sales', oldPrice: '₹521', newPrice: '₹349' },
//     { name: 'Lakme 9 to 5 CC - Honey', seller: 'Seller - Lalita Sales', oldPrice: '₹521', newPrice: '₹349' },
// ];


const Dashboard: React.FC<GlobalProps> = (props: GlobalProps) => {
    function viewProduct() {
        productController.getAllProduct();
        console.log("Products", props.store!.productStore.getEntities);
    }

    useEffect(() => {
        viewProduct();
    }, []);


    function handleClick(productStore) {
        cartStore.addProductsToCart(productStore);
    }

    const history = useHistory();
    const navigateToRoute = (route: RoutePath) => {
        if (route) {
            history.push(RouteUtils.getUrl(route, null));
        }
    };

    return (
        <div className="container-fluid">
            <div className="dashboard">
                <div className="dashboard__items">

                    <div className="dashboard__items-text">
                        <h4>Today, we present you:</h4><br/>
                        <h2><strong>Steal on Cosmetics</strong></h2>
                        <button onClick={() => navigateToRoute(RoutePath.products)} type="submit">Filter Page
                        </button>
                        <button onClick={() => navigateToRoute(RoutePath.description)} type="submit">Product Description Page
                        </button>
                        <button onClick={() => navigateToRoute(RoutePath.checkout)} type="submit">Checkout Page
                        </button>
                    </div>

                    <div className="dashboard__items-item">
                        <div className="row">
                            {
                                props.store!.productStore.getEntities.map((p, index) => {
                                    return (
                                        <div key={index}
                                             className="col-6 col-sm-6 col-md-4 col-lg-2 dashboard__items-item__spacing">
                                            <ProductCard
                                                name={p.description}
                                                seller='Seller'
                                                oldPrice={p.old_price}
                                                newPrice={p.new_price}
                                            />
                                            {/*<button onClick={handleClick}>Add To Cart</button>*/}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="dashboard__items-text pt-4 pb-2">
                        <h2><strong>Crazy Deals on Clothing</strong></h2>
                    </div>
                    <div className="dashboard__items-item">
                        <div className="row">
                            {
                                props.store!.productStore.getEntities.map((p, index) => {
                                    return (
                                        <div key={index}
                                             className="col-6 col-sm-6 col-md-4 col-lg-2 dashboard__items-item__spacing">
                                            <ProductCard
                                                name={p.description}
                                                seller='Seller'
                                                oldPrice={p.old_price}
                                                newPrice={p.new_price}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default inject('store')(observer(Dashboard));
