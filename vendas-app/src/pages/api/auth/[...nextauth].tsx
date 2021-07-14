import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: 'Iv1.e8b4b3582569573a',
            clientSecret: 'e9c1358f5eaa8f385406eef6df876b41fb4610a5'
        }),
        Providers.Auth0({
            clientId: 'sQ6OnNSi0dTLDBSMHUUHedxrbWtxjzwk',
            clientSecret: 'Igk98BT8t-B7JDRwAffPF-rrIrsDIQgSoSymbEooE5R7w7DwrEOcK3YEHSZyCmZJ',
            domain: 'cursodsousa.us.auth0.com',
        }),
    ]
})