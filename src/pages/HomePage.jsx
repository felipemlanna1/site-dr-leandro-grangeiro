import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { List, X, WhatsappLogo, InstagramLogo, Star, ArrowDown, Scalpel, Eye, Heart, UserCircle, Certificate, MapPin, Clock, Phone, GoogleLogo, ArrowRight, ShieldCheck } from '@phosphor-icons/react'

const procedimentos = [
  { icon: Scalpel, title: 'Mamoplastia', desc: 'Aumento, redução e lifting mamário com técnicas modernas e resultados naturais.' },
  { icon: Eye, title: 'Blefaroplastia', desc: 'Rejuvenescimento do olhar com remoção de excesso de pele nas pálpebras.' },
  { icon: UserCircle, title: 'Rinoplastia', desc: 'Harmonização nasal funcional e estética, respeitando as proporções faciais.' },
  { icon: Heart, title: 'Lipoaspiração', desc: 'Remodelação corporal com remoção de gordura localizada por técnica tumescente.' },
  { icon: ShieldCheck, title: 'Cirurgia Reconstrutiva', desc: 'Reconstrução mamária, correção de cicatrizes e cirurgias reparadoras.' },
  { icon: Certificate, title: 'Procedimentos Minimamente Invasivos', desc: 'Toxina botulínica, preenchimento facial e bioestimuladores.' },
]

const reviews = [
  { name: 'Mariana R.', text: 'Dr. Leandro é extremamente profissional e cuidadoso. Me senti segura durante todo o processo. Resultado perfeito!', stars: 5 },
  { name: 'Lucia S.', text: 'Excelente cirurgião! Fiz a rinoplastia e superou todas as minhas expectativas. Muito atencioso no pós-operatório.', stars: 5 },
  { name: 'Amanda C.', text: 'Profissional de altíssimo nível. A consulta foi detalhada, explicou tudo com calma. Recomendo de olhos fechados.', stars: 5 },
  { name: 'Paula T.', text: 'Fiz mamoplastia com o Dr. Leandro. O resultado ficou incrivelmente natural. A equipe toda é maravilhosa.', stars: 5 },
]

function SectionAnim({ children, id, bg = '#F7F5F2', style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.section ref={ref} id={id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
      style={{ padding: 'clamp(80px, 10vw, 140px) 40px', background: bg, ...style }}>
      {children}
    </motion.section>
  )
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  const navLinks = ['Procedimentos', 'Sobre', 'Depoimentos', 'Contato']

  return (
    <>
      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? '12px 0' : '20px 0', background: scrolled ? 'rgba(247,245,242,0.95)' : 'rgba(247,245,242,0.6)', backdropFilter: 'blur(20px)', transition: 'all 0.4s', borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: '#1B2B3A', fontWeight: 400 }}>
            Dr. Leandro <span style={{ color: '#7B9BAF', fontWeight: 300, fontStyle: 'italic' }}>Grangeiro</span>
          </a>
          <div className="nav-desk" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {navLinks.map(l => <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 12, letterSpacing: 1.5, color: '#7A7A7A', textTransform: 'uppercase' }}>{l}</a>)}
            <a href="https://wa.me/5548996606881?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Leandro%20Grangeiro." style={{ padding: '10px 24px', background: '#1B2B3A', color: '#F7F5F2', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 500 }}>Agendar Consulta</a>
          </div>
          <button className="mob-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>{menuOpen ? <X size={24} /> : <List size={24} />}</button>
        </div>
        {menuOpen && <div style={{ position: 'fixed', inset: 0, background: 'rgba(247,245,242,0.98)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}><X size={28} /></button>
          {navLinks.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: '#1B2B3A' }}>{l}</a>)}
        </div>}
        <style>{`@media(max-width:768px){.nav-desk{display:none!important}.mob-btn{display:block!important}}`}</style>
      </nav>

      {/* HERO — cirurgião plástico premium, confiança e elegância */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(175deg, #1B2B3A 0%, #263845 40%, #2D4050 70%, #1B2B3A 100%)', padding: '140px 40px 80px', textAlign: 'center', position: 'relative' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: 11, letterSpacing: 5, textTransform: 'uppercase', color: '#7B9BAF', marginBottom: 28 }}>CRM/SC 15913 · RQE 12964 · Membro SBCP</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9 }} style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 300, color: '#F7F5F2', lineHeight: 1.0, maxWidth: 800, letterSpacing: '-0.02em' }}>
          Cirurgia Plástica com<br /><span style={{ color: '#7B9BAF', fontStyle: 'italic' }}>excelência</span> e segurança
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)', color: 'rgba(247,245,242,0.5)', maxWidth: 520, lineHeight: 1.8, marginTop: 28, fontWeight: 300 }}>
          Primeiro lugar na residência de Cirurgia Plástica. Preceptor na UFSC. Especialista em procedimentos estéticos e reconstrutivos, no Baía Sul Medical Center em Florianópolis.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} style={{ display: 'flex', gap: 16, marginTop: 44, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://wa.me/5548996606881?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." style={{ padding: '16px 40px', background: '#7B9BAF', color: '#0D1820', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'all 0.3s' }}>
            <WhatsappLogo size={18} weight="fill" /> Agendar Consulta
          </a>
          <a href="#procedimentos" style={{ padding: '16px 40px', border: '1px solid rgba(247,245,242,0.2)', color: '#F7F5F2', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}>Ver Procedimentos</a>
        </motion.div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} style={{ position: 'absolute', bottom: 36 }}><ArrowDown size={18} color="rgba(123,155,175,0.5)" /></motion.div>
      </section>

      {/* CREDENCIAIS */}
      <div style={{ background: '#F7F5F2', padding: '40px', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 'clamp(24px, 5vw, 60px)', flexWrap: 'wrap', textAlign: 'center' }}>
          {[{ n: 'SBCP', d: 'Sociedade Brasileira de Cirurgia Plástica' }, { n: 'UFSC', d: 'Preceptor de Residência' }, { n: '1º Lugar', d: 'Residência em Cirurgia Plástica' }, { n: '160+', d: 'Avaliações Google' }].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: '#7B9BAF', fontWeight: 400 }}>{c.n}</p>
              <p style={{ fontSize: 11, color: '#7A7A7A', letterSpacing: 1, marginTop: 4 }}>{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROCEDIMENTOS */}
      <SectionAnim id="procedimentos" bg="#fff">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#7B9BAF', marginBottom: 12, fontWeight: 500 }}>Especialidades</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1B2B3A', marginBottom: 60, maxWidth: 500 }}>Procedimentos com <span style={{ fontStyle: 'italic', color: '#7B9BAF' }}>precisão</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'rgba(0,0,0,0.03)' }}>
            {procedimentos.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: 32, background: '#fff', transition: 'background 0.3s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.background = '#F7F5F2'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
                <p.icon size={28} weight="duotone" color="#7B9BAF" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: 20, color: '#1B2B3A', marginBottom: 8, fontWeight: 400 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#7A7A7A', lineHeight: 1.7 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href="https://wa.me/5548996606881?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20um%20procedimento." style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#7B9BAF', fontWeight: 500, borderBottom: '1px solid #7B9BAF', paddingBottom: 2 }}>Agendar sua consulta <ArrowRight size={16} /></a>
          </div>
        </div>
      </SectionAnim>

      {/* SOBRE */}
      <SectionAnim id="sobre" bg="#1B2B3A">
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#7B9BAF', marginBottom: 12, fontWeight: 500 }}>O Cirurgião</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F7F5F2', marginBottom: 32 }}>Dr. Leandro <span style={{ fontStyle: 'italic', color: '#7B9BAF' }}>Grangeiro</span></h2>
          <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)', color: 'rgba(247,245,242,0.55)', lineHeight: 1.9, maxWidth: 650, margin: '0 auto' }}>
            Natural de Florianópolis, formado em Medicina pela Univali. Residência em Cirurgia Geral e Cirurgia Plástica no Hospital Universitário da UFSC — onde conquistou o primeiro lugar. Membro titular da Sociedade Brasileira de Cirurgia Plástica (SBCP) e atual preceptor no Serviço de Cirurgia Plástica e Queimados da UFSC, formando novos cirurgiões plásticos.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 48, flexWrap: 'wrap' }}>
            {[{ num: 'CRM 15913', label: 'Registro Médico' }, { num: 'RQE 12964', label: 'Especialista' }, { num: 'SBCP', label: 'Membro Titular' }].map((s, i) => (
              <div key={i}><p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: '#7B9BAF' }}>{s.num}</p><p style={{ fontSize: 11, color: 'rgba(247,245,242,0.4)', letterSpacing: 2, marginTop: 4, textTransform: 'uppercase' }}>{s.label}</p></div>
            ))}
          </div>
        </div>
      </SectionAnim>

      {/* DEPOIMENTOS */}
      <SectionAnim id="depoimentos" bg="#F7F5F2">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(123,155,175,0.1)', padding: '8px 20px', borderRadius: 30, marginBottom: 16 }}>
              <GoogleLogo size={16} weight="bold" color="#7B9BAF" /><span style={{ fontSize: 13, color: '#1B2B3A', fontWeight: 500 }}>4.8 estrelas · 160 avaliações</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1B2B3A' }}>Confiança dos <span style={{ fontStyle: 'italic', color: '#7B9BAF' }}>pacientes</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ padding: 32, background: '#fff', border: '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>{[...Array(r.stars)].map((_, j) => <Star key={j} size={14} weight="fill" color="#7B9BAF" />)}</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: '#1B2B3A', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 16 }}>"{r.text}"</p>
                <p style={{ fontSize: 12, color: '#7A7A7A', fontWeight: 500, letterSpacing: 1 }}>{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionAnim>

      {/* CONTATO */}
      <SectionAnim id="contato" bg="#1B2B3A">
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: '#7B9BAF', marginBottom: 12, fontWeight: 500 }}>Contato</p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#F7F5F2', marginBottom: 16 }}>Agende sua <span style={{ fontStyle: 'italic', color: '#7B9BAF' }}>consulta</span></h2>
          <p style={{ color: 'rgba(247,245,242,0.4)', marginBottom: 48, maxWidth: 450, margin: '0 auto 48px' }}>Converse com nossa equipe para agendar sua avaliação personalizada.</p>
          <a href="https://wa.me/5548996606881?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Leandro." style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 48px', background: '#7B9BAF', color: '#0D1820', fontSize: 14, fontWeight: 600, letterSpacing: 1, transition: 'all 0.3s' }}>
            <WhatsappLogo size={22} weight="fill" /> Agendar via WhatsApp
          </a>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(247,245,242,0.06)' }}>
            <div><MapPin size={20} weight="light" color="#7B9BAF" style={{ marginBottom: 8 }} /><p style={{ fontSize: 14, color: '#F7F5F2' }}>Baía Sul Medical Center</p><p style={{ fontSize: 13, color: 'rgba(247,245,242,0.4)' }}>Centro — Florianópolis/SC</p></div>
            <div><Phone size={20} weight="light" color="#7B9BAF" style={{ marginBottom: 8 }} /><p style={{ fontSize: 14, color: '#F7F5F2' }}>(48) 9660-6881</p><p style={{ fontSize: 13, color: 'rgba(247,245,242,0.4)' }}>WhatsApp disponível</p></div>
            <div><Clock size={20} weight="light" color="#7B9BAF" style={{ marginBottom: 8 }} /><p style={{ fontSize: 14, color: '#F7F5F2' }}>Seg — Sex</p><p style={{ fontSize: 13, color: 'rgba(247,245,242,0.4)' }}>Com agendamento</p></div>
          </div>
        </div>
      </SectionAnim>

      {/* FOOTER */}
      <footer style={{ padding: '32px 40px', background: '#0D1820', borderTop: '1px solid rgba(247,245,242,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: '#F7F5F2' }}>Dr. Leandro <span style={{ color: '#7B9BAF', fontStyle: 'italic' }}>Grangeiro</span></p>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://wa.me/5548996606881" target="_blank" rel="noopener"><WhatsappLogo size={18} color="rgba(247,245,242,0.4)" /></a>
            <a href="https://instagram.com/drleandrograngeiro" target="_blank" rel="noopener"><InstagramLogo size={18} color="rgba(247,245,242,0.4)" /></a>
          </div>
          <Link to="/manual-da-marca" style={{ fontSize: 11, color: '#7B9BAF', letterSpacing: 2, textTransform: 'uppercase' }}>Manual da Marca</Link>
        </div>
        <p style={{ maxWidth: 1200, margin: '16px auto 0', fontSize: 11, color: 'rgba(247,245,242,0.2)', textAlign: 'center' }}>CRM/SC 15913 · RQE 12964 · Baía Sul Medical Center — Florianópolis/SC</p>
      </footer>

      <motion.a href="https://wa.me/5548996606881?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 1000, width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}>
        <WhatsappLogo size={28} weight="fill" color="#fff" />
      </motion.a>
    </>
  )
}
