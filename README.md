
  # Business Website Development

  This is a code bundle for Business Website Development. The original project is available at https://www.figma.com/design/L6kTY99XKZ1p5pSURqqHqk/Business-Website-Development.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Blog admin access

  `/admin` (and the existing `/blog` alias) shows the email and password login. Public navigation has no admin link, and the admin routes are marked `noindex`. Sign-up and Google sign-in are disabled. A successful Firebase sign-in is not enough: the account must have the server-set `admin: true` custom claim.

  Before using Blog Admin in production:

  1. In Firebase Authentication, disable Google and any other sign-in providers that are not used. Create admin accounts through the Firebase Console or a trusted server using the Firebase Admin SDK; never create accounts in the public app.
  2. In Firebase Authentication settings, set the password policy to require at least 12 characters, uppercase and lowercase letters, a number, and a non-alphanumeric character, and choose **Enforce**.
  3. From a trusted, private Admin SDK environment, assign the custom claim to each approved account, for example `await getAuth().setCustomUserClaims(uid, { admin: true })`. Do not put Admin SDK credentials in this repository or browser app. Have admins sign out and back in to refresh their ID token after assigning a claim.

  Blog posts currently use browser `localStorage`. The custom claim gates the admin interface, but localStorage is not a server-side permission boundary and posts are not shared or protected across browsers. For tamper-proof publishing/deletion, migrate post storage to a server-backed database and enforce the same admin claim in its security rules before relying on it as a production CMS.
  
