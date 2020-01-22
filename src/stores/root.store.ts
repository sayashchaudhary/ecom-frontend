import {observable} from 'mobx';
import { UserStore } from './user.store';

export class RootStore {
    private static _instance: RootStore;

    @observable userStore: UserStore;

    private constructor() {

        this.userStore = UserStore.getInstance();

    }

    static getInstance(): RootStore {
        if (!this._instance) {
            this._instance = new RootStore();
        }

        return this._instance;
    }
}

export const rootStore = RootStore.getInstance();