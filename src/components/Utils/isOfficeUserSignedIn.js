import {useEffect, useState} from 'react';
import {Providers, ProviderState} from "@microsoft/mgt-element";


export default function useIsSignedIn() {
    const [isSignedIn, setIsSignedIn] = useState(null);
    useEffect(() => {
        const updateState = () => {

            const provider = Providers.globalProvider;
            if (provider) {
                if (provider.state === ProviderState.Loading) {
                    setIsSignedIn(null)
                } else if (provider.state === ProviderState.SignedOut) {
                    setIsSignedIn(false)
                } else {
                    Providers.globalProvider.getAccessToken({scopes: ['User.Read']}).then((res) => {
                        Providers.globalProvider.graph.client.api('me').get()
                            .then(gotMe => {
                                setIsSignedIn({
                                    email: gotMe.mail,
                                    token: res
                                })

                            })

                    })


                }
            } else {
                setIsSignedIn(null)
            }
        };

        Providers.onProviderUpdated(updateState);
        updateState();

        return () => {
            Providers.removeProviderUpdatedListener(updateState);
        }
    }, []);

    return [isSignedIn];
}