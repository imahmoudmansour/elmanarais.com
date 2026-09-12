# El Manara International Schools website

Static HTML/CSS site for [elmanarais.com](https://elmanarais.com). English is the default language. Arabic lives in `/ar/`.

The admissions portal at `register.elmanarais.com` is a separate project and is not part of this site.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy by git pull

On the host, from the public web folder (often `public_html` or `www`):

```bash
git clone https://github.com/imahmoudmansour/elmanarais.com.git .
```

Later updates:

```bash
git pull origin main
```

Point the domain document root at this folder. Enable HTTPS on the host. Apache will use `.htaccess` for the 404 page.

## Contact used on the site

- Phone / WhatsApp: 010 38537388
- Email: elmanarainternationalschool@gmail.com
- Facebook: El Manara International Schools
