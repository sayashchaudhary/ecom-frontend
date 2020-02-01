import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Slider, { SliderData } from '../Shared/Carousel/Carousel';
import Footer from '../Shared/Footer/Footer';
import Tiles, { TilesProps } from "../Shared/Tiles/Tiles";
import Market, {MarketProps} from "../Shared/Market/Market";

const dummyTiles: TilesProps[] = [
    {text: 'Men clothing',imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzDjENz1AjhT5nYUsJp4PJwVFLEzpclKLHPvHGNpKWmydb303'},
    {text: 'Men clothing',imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDgZMRkeqJWQ0E_UF8euHcOJcdZFU6v0e5-QDK72jGMI7UPi_N'},
    {text: 'Men clothing',imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBc-elmXE8KdWSPTv8JlXxiOmaI9Yww6ywW006iuycEb6iSZLB'},
    {text: 'Men clothing',imageUrl:'https://www.buckandbuck.com/media/catalog/product/cache/ed87568b890e2f3fc93cb0ae3e77131d/3/1/31rx_2009_srgb_1_1.jpg'},
];

const dummySlider: SliderData[] = [
    {caption: ''},
    {caption: ''},
    {caption: ''}
];

const dummyMarket: MarketProps[] = [
    {shop: 'Rama Traders',category:'Ethnic, Casuals, Formals'} ,
    {shop: 'Rama Traders',category:'Ethnic, Casuals, Formals'} ,
    {shop: 'Rama Traders',category:'Ethnic, Casuals, Formals'} ,
    {shop: 'Rama Traders',category:'Ethnic, Casuals, Formals'} ,
    {shop: 'Rama Traders',category:'Ethnic, Casuals, Formals'} ,
    {shop: 'Rama Traders',category:'Ethnic, Casuals, Formals'} ,

];

const Clothing: React.FC = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="clothing">
                <div className="row">
                    {
                        dummyTiles.map(t => {
                            return (
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 clothing__spacing">
                                    <Tiles imageUrl={t.imageUrl} text={t.text}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="clothing__carousel">
                        <Slider data={dummySlider}/>
                    </div>
                </div>
                <div className="row">
                    <div className="clothing__text pt-2">
                        <h1>Check them Out:</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        dummyMarket.map(m => {
                            return (
                                <div className="col-md-6 pt-3 clothing__spacing">
                                    <Market shop={m.shop} category={m.category} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="clothing__carousel">
                        <Slider data={dummySlider}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Clothing;
