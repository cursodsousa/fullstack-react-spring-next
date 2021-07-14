import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: '',
            clientSecret: '',
        }),
        Providers.Auth0({
            clientId: 'BBttAOL7gsyl80ap7DWYb5JYX88FtZg6',
            clientSecret: 'v_oEnTzDmLKIYYPze9HkiIxaQuYPAxlSXxVV0Ak_Fexn0vFSPhM6oLC2drnUXZdA',
            domain: 'dougllasfps.us.auth0.com'
        }),
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
              username: { label: "Email", type: "text", placeholder: "ex: fulano@email.com" },
              password: {  label: "Senha", type: "password" }
            },
            async authorize(credentials, req) {
              // You need to provide your own logic here that takes the credentials
              // submitted and returns either a object representing a user or value
              // that is false/null if the credentials are invalid.
              // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
              // You can also use the `req` object to obtain additional parameters
              // (i.e., the request IP address) 
              const res = await fetch("/your/endpoint", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
              
              // If no error and we have user data, return it
              if (res.ok && user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
          })
    ]
})