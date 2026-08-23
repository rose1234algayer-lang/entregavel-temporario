import React from 'react';
import { 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Smartphone,
  Check
} from 'lucide-react';

export const ConfirmationPage: React.FC = () => {
  return (
    <main 
      id="confirmation-main-container" 
      className="min-h-screen bg-[#FDFBF7] py-10 px-4 sm:py-14 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans antialiased"
    >
      {/* Central Wrapper */}
      <div 
        id="confirmation-content-wrapper" 
        className="max-w-2xl w-full flex flex-col items-center"
      >
        
        {/* Brand Logo Header */}
        <header 
          id="brand-header" 
          className="mb-6 sm:mb-8 flex flex-col items-center text-center"
        >
          <div 
            id="brand-logo-badge" 
            className="w-16 h-16 bg-[#0A192F] rounded-full flex items-center justify-center mb-2 shadow-lg ring-4 ring-white"
          >
            <span className="text-white font-extrabold text-xl tracking-tight font-heading">
              CNH
            </span>
          </div>
          <div className="h-1 w-24 bg-[#FF6B00] rounded-full" />
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500 font-heading">
            Plano Aprovação 2026
          </p>
        </header>

        {/* Success Transaction Indicator Badge */}
        <div 
          id="success-indicator-pill" 
          className="mb-5 flex items-center justify-center bg-green-50 px-4 py-1.5 rounded-full border border-green-200/80 shadow-xs"
        >
          <svg 
            className="w-4 h-4 text-green-600 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-800 font-bold text-xs uppercase tracking-wider">
            Transação Concluída & Confirmada
          </span>
        </div>

        {/* Main Content Card */}
        <div 
          id="confirmation-card" 
          className="bg-white shadow-2xl rounded-[32px] overflow-hidden w-full border border-gray-100"
        >
          <div className="p-6 sm:p-10 text-center">
            
            {/* Header Titles */}
            <h1 
              id="main-title" 
              className="text-[28px] sm:text-[38px] leading-tight font-black text-[#0A192F] uppercase tracking-tighter mb-2 font-heading"
            >
              PAGAMENTO CONFIRMADO ✅
            </h1>
            
            <h2 
              id="subtitle" 
              className="text-[#FF6B00] text-sm sm:text-base md:text-lg font-bold tracking-tight uppercase mb-6 font-heading"
            >
              SEU ACESSO ESTÁ SENDO PREPARADO
            </h2>

            {/* Thank You and Intro */}
            <div 
              id="intro-message" 
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto space-y-2"
            >
              <p>
                Obrigado por adquirir o <strong className="font-bold text-[#0A192F]">Plano Aprovação CNH 2026</strong>.
              </p>
              <p>
                Estamos preparando o seu acesso e você receberá todo o material diretamente pelo{' '}
                <strong className="text-[#0A192F] font-semibold bg-amber-50/80 px-2 py-0.5 rounded border border-amber-200/60 inline-block">
                  WhatsApp informado na compra
                </strong>.
              </p>
            </div>

            {/* Dark Navy & Orange Delivery Highlight Box */}
            <div 
              id="delivery-highlight-card" 
              className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-7 mb-8 text-left transition-transform shadow-lg relative overflow-hidden border border-slate-800"
            >
              {/* Subtle background ambient icon */}
              <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                <Clock className="w-24 h-24 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-5 h-5 text-[#FF6B00]" />
                  <h3 
                    id="delivery-title" 
                    className="text-[#FF6B00] text-lg sm:text-xl font-black italic tracking-tight font-heading"
                  >
                    📲 ENTREGA EM ATÉ 24 HORAS
                  </h3>
                </div>

                <p className="text-sm text-blue-100/90 leading-relaxed mb-4">
                  Assim que seu acesso estiver pronto, nossa equipe enviará uma mensagem para você pelo WhatsApp.
                </p>

                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3.5 border border-white/10 text-white text-xs sm:text-sm font-medium mb-3 flex items-start gap-2">
                  <span className="text-[#FF6B00] font-bold text-base leading-none">•</span>
                  <span>Você não precisa realizar nenhuma outra ação agora.</span>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-300">
                  Mantenha seu WhatsApp disponível e confira se o número informado no pedido está correto.
                </p>
              </div>
            </div>

            {/* What Happens Now Checklist Section */}
            <div 
              id="what-happens-now-section" 
              className="bg-gray-50/90 rounded-2xl p-5 sm:p-6 text-left border border-gray-100 mb-8"
            >
              <p 
                id="checklist-heading" 
                className="text-[#0A192F] font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2.5 font-heading flex items-center justify-between"
              >
                <span>O QUE ACONTECE AGORA?</span>
                <span className="text-[11px] text-emerald-600 font-semibold lowercase">4 etapas</span>
              </p>

              <ul id="steps-checklist" className="space-y-3">
                <li className="flex items-center text-xs sm:text-sm text-gray-700">
                  <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 text-[11px] font-bold shrink-0 shadow-xs">
                    ✓
                  </span>
                  <span>Seu pagamento foi registrado</span>
                </li>

                <li className="flex items-center text-xs sm:text-sm text-gray-700">
                  <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 text-[11px] font-bold shrink-0 shadow-xs">
                    ✓
                  </span>
                  <span>Seu pedido entrou em preparação</span>
                </li>

                <li className="flex items-center text-xs sm:text-sm text-gray-700">
                  <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 text-[11px] font-bold shrink-0 shadow-xs">
                    ✓
                  </span>
                  <span>O material será enviado pelo WhatsApp</span>
                </li>

                <li className="flex items-center text-xs sm:text-sm font-bold text-[#0A192F] bg-white p-2.5 rounded-xl border border-gray-200/70 shadow-2xs">
                  <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 text-[11px] font-bold shrink-0 shadow-xs">
                    ✓
                  </span>
                  <span>
                    Prazo máximo de entrega:{' '}
                    <span className="text-[#FF6B00] font-extrabold ml-1">até 24 horas</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Reassurance Footer inside Card */}
            <div id="card-inner-reassurance" className="pt-2 border-t border-gray-100">
              <p className="text-[#0A192F] font-bold text-sm sm:text-base tracking-wide uppercase font-heading">
                Fique tranquilo, seu pedido está confirmado.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1.5">
                Em breve você poderá começar sua preparação com o{' '}
                <span className="font-semibold text-slate-800">Plano Aprovação CNH 2026</span>.
              </p>
              <div className="mt-4 text-[#FF6B00] font-bold tracking-tight text-sm">
                Obrigado pela confiança.
              </div>
            </div>

          </div>

          {/* Security & Authenticity Trust Bar */}
          <div 
            id="card-security-footer" 
            className="bg-gray-50/80 px-6 py-3.5 border-t border-gray-100 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500"
          >
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Ambiente Seguro & Verificado</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-medium">
              <MessageSquare className="w-4 h-4 text-green-600" />
              <span>Atendimento via WhatsApp Oficial</span>
            </div>
          </div>
        </div>

        {/* Outer Page Footer */}
        <footer id="page-footer" className="mt-8 text-center text-xs text-gray-400 space-y-1">
          <p>© 2026 Plano Aprovação CNH. Todos os direitos reservados.</p>
          <p className="text-[11px]">Esta é uma página de confirmação oficial de pagamento.</p>
        </footer>

      </div>
    </main>
  );
};
export default ConfirmationPage;
