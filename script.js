// script.js - Funcionalidades do site
// by sla_midd

// Atualizar URL dinamicamente
function updateUrlDisplay() {
    const url = window.location.origin + '/raw.js';
    document.getElementById('urlDisplay').textContent = url;
}

// Copiar código
function copyCode() {
    const codeBox = document.getElementById('codeBox');
    const code = codeBox.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        // Feedback visual
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        btn.style.background = 'linear-gradient(45deg, #4ade80, #2ecc71)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'linear-gradient(45deg, #29c4ff, #ff2969)';
        }, 2000);
        
    }).catch(err => {
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        alert('Código copiado!');
    });
}

// Testar script
function testScript() {
    const url = window.location.origin + '/raw.js';
    const testCode = `print("Testando conexão com: ${url}")`;
    
    // Simulação de teste
    alert(`Para testar:\n1. Abra o Roblox\n2. Cole: loadstring(game:HttpGet("${url}"))()`);
}

// Proteção básica
document.addEventListener('contextmenu', (e) => {
    if (e.target.classList.contains('code-box')) {
        e.preventDefault();
        alert('Use o botão "Copiar Código"');
    }
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateUrlDisplay();
    
    // Adicionar ano atual no copyright
    const yearElement = document.querySelector('.copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} - Todos os direitos reservados`;
    }
});