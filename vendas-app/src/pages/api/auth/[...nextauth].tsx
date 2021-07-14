import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: '5635cc08091d452b082e',
            clientSecret: '842367ad18239291bc9fbb32b3cded21871b0049 '
        })
    ]
})