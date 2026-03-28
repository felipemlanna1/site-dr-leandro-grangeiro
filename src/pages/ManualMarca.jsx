import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'

export default function ManualMarca() {
  const colors = [
    { name: 'Principal', hex: '#7B9BAF' },
    { name: 'Escuro', hex: '#1B2B3A' },
    { name: 'Claro', hex: '#F7F5F2' },
  ]

  const slideStyle = (bg, color) => ({
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center',
    background: bg, color: color, padding: '80px 40px', textAlign: 'center'
  })

  return (
    <div style={ { fontFamily: "'DM Sans', sans-serif" } }>
      <Link to="/" style={{
        position: 'fixed', top: 24, left: 24, zIndex: 100,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: '#7B9BAF', fontSize: 14, fontWeight: 500,
        background: 'rgba(0,0,0,0.7)', padding: '10px 20px',
        borderRadius: 30, backdropFilter: 'blur(10px)'
      }}><ArrowLeft size={16} /> Voltar</Link>

      <section style={slideStyle('#1B2B3A', '#F7F5F2')}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, marginBottom: 12 }}>Dr. Leandro Grangeiro</h2>
        <p style={{ fontSize: 14, letterSpacing: 4, opacity: 0.5, textTransform: 'uppercase' }}>Cirurgião Plástico — Manual da Marca</p>
      </section>

      <section style={slideStyle('#F7F5F2', '#1B2B3A')}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 32 }}>Sobre a Marca</h2>
        <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.9, opacity: 0.8 }}>Cirurgia plástica estética e reconstrutiva com excelência técnica. Membro SBCP, preceptor UFSC.</p>
      </section>

      <section style={slideStyle('#fff', '#1B2B3A')}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 48 }}>Paleta de Cores</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {colors.map(c => (
            <div key={c.hex}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: c.hex, margin: '0 auto 12px', border: c.hex === '#F7F5F2' ? '1px solid #ddd' : 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }} />
              <p style={{ fontSize: 13, fontWeight: 600 }}>{c.name}</p>
              <p style={{ fontSize: 11, opacity: 0.6 }}>{c.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={slideStyle('#1B2B3A', '#F7F5F2')}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 32, color: '#7B9BAF' }}>Tom de Voz</h2>
        <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.9, opacity: 0.7 }}>Profissional, confiável e acolhedor. Transmitimos segurança com linguagem clara e técnica acessível.</p>
      </section>

      <section style={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#1B2B3A', color: 'rgba(255,255,255,0.3)', padding: 60, textAlign: 'center' }}>
        <p style={{ fontSize: 12 }}>Apresentação gerada por Vendedor de Site</p>
      </section>
    </div>
  )
}
