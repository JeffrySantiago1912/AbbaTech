export type Locale = 'es' | 'en'

export interface Dictionary {
  metaTitle: string
  metaDescription: string
  topbar: string
  nav: {
    home: string
    services: string
    about: string
    work: string
    contact: string
    cta: string
    open: string
    close: string
    themeLight: string
    themeDark: string
    language: string
  }
  hero: {
    titleBefore: string
    titleAccent: string
    titleAfter: string
    text: string
    primary: string
    secondary: string
    place: string
    panelTitle: string
    panel: { label: string; text: string }[]
  }
  services: {
    eyebrow: string
    title: string
    text: string
    items: { title: string; text: string }[]
  }
  work: {
    eyebrow: string
    title: string
    text: string
    view: string
    items: { id: string; name: string; category: string; text: string; tags: string[] }[]
  }
  about: {
    eyebrow: string
    title: string
    text: string
    points: { title: string; text: string }[]
  }
  faq: {
    eyebrow: string
    title: string
    items: { q: string; a: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    name: string
    email: string
    phone: string
    service: string
    message: string
    choose: string
    other: string
    send: string
    direct: string
    greeting: string
    placeholders: { name: string; email: string; phone: string; message: string }
  }
  footer: { blurb: string; rights: string }
}
