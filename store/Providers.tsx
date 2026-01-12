"use client";

import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "@/components/Loader";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (

        <Provider store={store}>
            <PersistGate
                persistor={persistor}
                loading={
                    <Loader />
                }
            >
                {children}
            </PersistGate>
        </Provider>
    )
}

export default Providers;