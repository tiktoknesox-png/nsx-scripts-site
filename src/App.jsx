import React, { useState } from 'react'

export default function App() {
  const products = [
    { id: 'vehshop', title: 'Vehicle Shop', price: 29.99, short: 'Concessionnaire complet, compatible ESX/QBcore.'},
    { id: 'inventory', title: 'Inventory & Stash', price: 19.99, short: 'Inventaire basé sur poids, stash.'},
    { id: 'jobs', title: 'Custom Jobs Framework', price: 39.99, short: 'Créer et gérer métiers facilement.'}
  ]

  const [cart, setCart] = useState([])

  function addToCart(p) {
    setCart(c => {
      const found = c.find(i => i.id === p.id)
      if (found) return c.map(i => i.id === p.id ? { ...i, qty: i.qty+1 } : i)
      return [...c, { ...p, qty: 1 }]
    })
  }

  function subtotal() {
    return cart.reduce((s,i) => s + i.price * i.qty, 0).toFixed(2)
  }

  function simulatePayment() {
    if (cart.length === 0) return alert('Panier vide')
    alert('Paiement simulé. Remplacez par Stripe/PayPal et génération de licences côté serveur.')
    // clear cart
    setCart([])
  }

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <img src="/logo.webp" alt="NSX Scripts" className="logo" />
          <div className="brand-text">
            <h1>NSX Scripts</h1>
            <p className="tag">Scripts FiveM de qualité</p>
          </div>
        </div>
        <nav>
          <button className="btn">Scripts</button>
          <button className="btn">FAQ</button>
          <button className="cart">Panier ({cart.reduce((a,b)=>a+b.qty,0)})</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src="/banner.png" alt="NSX Scripts banner" className="banner" />
        </section>

        <section className="catalog">
          <h2>Catalogue</h2>
          <div className="grid">
            {products.map(p => (
              <article key={p.id} className="card">
                <h3>{p.title}</h3>
                <p className="muted">{p.short}</p>
                <div className="card-footer">
                  <div className="price">€{p.price.toFixed(2)}</div>
                  <button className="btn primary" onClick={() => addToCart(p)}>Ajouter</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="cart-panel">
          <h3>Panier</h3>
          {cart.length === 0 && <p className="muted">Aucun produit</p>}
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div>{item.title} x{item.qty}</div>
              <div>€{(item.price * item.qty).toFixed(2)}</div>
            </div>
          ))}
          <div className="subtotal">Sous-total: €{subtotal()}</div>
          <button className="btn success" onClick={simulatePayment}>Payer (simulé)</button>
        </aside>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} NSX Scripts — Paiement & licences à intégrer</div>
      </footer>
    </div>
  )
}
