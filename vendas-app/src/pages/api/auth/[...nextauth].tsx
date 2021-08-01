import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.NEXT_PUBLIC_GITHUB_PROVIDER_CLIENTID,
            clientSecret:  process.env.NEXT_PUBLIC_GITHUB_PROVIDER_CLIENTSECRET
        }),
        Providers.Auth0({
            clientId: 'sQ6OnNSi0dTLDBSMHUUHedxrbWtxjzwk',
            clientSecret: 'Igk98BT8t-B7JDRwAffPF-rrIrsDIQgSoSymbEooE5R7w7DwrEOcK3YEHSZyCmZJ',
            domain: 'cursodsousa.us.auth0.com',
        }),
    ]
})