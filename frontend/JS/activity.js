async function logUserActivity(activity_type, page_name, details) {
    const user_id = localStorage.getItem("user_id");

    // Only log if user is logged in
    if (!user_id) return;

    try {
        const API_BASE = window.location.protocol.startsWith("http") ? "" : "http://localhost:5000";
        await fetch(`${API_BASE}/api/activity/log`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id,
                activity_type,
                page_name,
                details
            })
        });
    } catch (error) {
        console.error("Activity log failed", error);
    }
}

// Track Initial Page Load
window.addEventListener("load", () => {
    logUserActivity("PAGE_VISIT", "home", "opened homepage");
});

// Track Navigation Clicks
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", (e) => {
        const page = e.target.getAttribute("href").replace("#", "") || "home";
        logUserActivity("CLICK", page, `navigated to ${page}`);
    });
});

// Expose to window object so it can be used in other scripts if needed
window.logUserActivity = logUserActivity;

// --- AI Chat Assistant UI & Interactions ---
function toggleAIChat() {
    const chatWin = document.getElementById('ai-chat-window');
    const bubble = document.getElementById('ai-chat-bubble');
    if (!chatWin) return;
    
    if (chatWin.classList.contains('hidden-section')) {
        chatWin.classList.remove('hidden-section');
        if (bubble) bubble.style.transform = 'scale(0.9) rotate(15deg)';
    } else {
        chatWin.classList.add('hidden-section');
        if (bubble) bubble.style.transform = 'scale(1) rotate(0deg)';
    }
}

function sendQuickMessage(text) {
    const input = document.getElementById('ai-chat-input');
    if (input) {
        input.value = text;
        const form = document.getElementById('ai-chat-form');
        if (form) {
            const event = new Event('submit', { cancelable: true });
            form.dispatchEvent(event);
        }
    }
}

async function handleAIChatSubmit(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('ai-chat-input');
    if (!input) return;
    
    const userText = input.value.trim();
    if (!userText) return;
    
    // Clear input
    input.value = '';
    
    // Add User Message
    addChatMessage(userText, 'user');
    
    // Show Typing Indicator
    const typingId = showTypingIndicator();
    
    // Generate AI response
    setTimeout(() => {
        removeTypingIndicator(typingId);
        const aiResponse = generateLocalAIResponse(userText);
        addChatMessage(aiResponse, 'assistant');
    }, 800);
}

function addChatMessage(text, role) {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;
    
    const isUser = role === 'user';
    const msgDiv = document.createElement('div');
    msgDiv.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
    msgDiv.style.background = isUser ? 'var(--primary-orange)' : 'rgba(255,255,255,0.03)';
    msgDiv.style.border = isUser ? 'none' : '1px solid rgba(255,255,255,0.05)';
    msgDiv.style.color = isUser ? '#000' : '#eee';
    msgDiv.style.padding = '1.2rem 1.5rem';
    msgDiv.style.borderRadius = '1.2rem';
    msgDiv.style.marginBottom = '1rem';
    if (isUser) {
        msgDiv.style.borderTopRightRadius = '0.2rem';
        msgDiv.style.fontWeight = '500';
    } else {
        msgDiv.style.borderTopLeftRadius = '0.2rem';
    }
    msgDiv.style.maxWidth = '85%';
    msgDiv.style.fontSize = '1.3rem';
    msgDiv.style.lineHeight = '1.5';
    msgDiv.style.textTransform = 'none';
    msgDiv.innerHTML = text;
    
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return null;
    
    const typingDiv = document.createElement('div');
    const tempId = 'typing-' + Date.now();
    typingDiv.id = tempId;
    typingDiv.style.alignSelf = 'flex-start';
    typingDiv.style.background = 'rgba(255,255,255,0.03)';
    typingDiv.style.border = '1px solid rgba(255,255,255,0.05)';
    typingDiv.style.color = '#aaa';
    typingDiv.style.padding = '1.2rem 1.5rem';
    typingDiv.style.borderRadius = '1.2rem';
    typingDiv.style.borderTopLeftRadius = '0.2rem';
    typingDiv.style.maxWidth = '85%';
    typingDiv.style.fontSize = '1.3rem';
    typingDiv.style.lineHeight = '1.5';
    typingDiv.style.marginBottom = '1rem';
    typingDiv.innerHTML = 'AI Assistant is typing...';
    
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
    return tempId;
}

function removeTypingIndicator(id) {
    const indicator = document.getElementById(id);
    if (indicator) indicator.remove();
}

function generateLocalAIResponse(query) {
    const text = query.toLowerCase();
    
    if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
        return "Hi there! I am your AI Travel Buddy. How can I help you choose or plan your next premium vacation today?";
    }
    
    if (text.includes('goa')) {
        return "🏖️ <strong>Goa Beach Resort & Party Package</strong><br>• Cost: <strong>₹6,999/person</strong> (5 Days)<br>• Highlights: Calangute Beach, Fort Aguada, Watersports, and Elite Beach Resort stays.<br><br>👉 Would you like to check the details modal? Click <strong>'Book Now'</strong> on the Goa Card or say 'Help me book Goa'!";
    }
    
    if (text.includes('manali')) {
        return "❄️ <strong>Manali Solang Valley Snow Tour</strong><br>• Cost: <strong>₹7,999/person</strong> (6 Days)<br>• Highlights: Solang Valley, Rohtang Pass, Paragliding, and Scenic Mountain View Resorts.<br><br>👉 You can view full details in the package listings, or click <strong>'Book Now'</strong> to start booking!";
    }
    
    if (text.includes('jaipur')) {
        return "🏰 <strong>Jaipur Pink City Heritage Tour</strong><br>• Cost: <strong>₹5,999/person</strong> (4 Days)<br>• Highlights: Amber Fort, Hawa Mahal palace, Rajasthani Folk Dance, and Heritage Haveli stays.<br><br>👉 Let me know if you want booking assistance!";
    }
    
    if (text.includes('andaman')) {
        return "🐠 <strong>Andaman Tropical Island Escape</strong><br>• Cost: <strong>₹14,999/person</strong> (7 Days)<br>• Highlights: Radhanagar Beach, Scuba diving, Cellular Jail, and premium beachfront resort stays.<br><br>👉 Simply search for Andaman in the search bar above to see the card!";
    }
    
    if (text.includes('munnar')) {
        return "⛰️ <strong>Munnar Hills & Tea Garden Retreat</strong><br>• Cost: <strong>₹6,499/person</strong> (5 Days)<br>• Highlights: Foggy Hillside Balcony, Organic Tea Stations, Eco Trekking Trails, and Campfire gatherings.<br><br>👉 Click <strong>'Book Now'</strong> on Munnar card to view reviews, itinerary timeline, highlights, and book securely!";
    }
    
    if (text.includes('ladakh')) {
        return "🏔️ <strong>Ladakh Leh High Mountain Pass Adventure</strong><br>• Cost: <strong>₹12,999/person</strong> (7 Days)<br>• Highlights: Pangong Lake, Khardung La Pass, Nubra Valley, and high-altitude luxury camps.<br><br>👉 If you have dates ready, click <strong>'Book Now'</strong> on the Ladakh card to proceed!";
    }
    
    if (text.includes('book') || text.includes('booking') || text.includes('reserve')) {
        return "🛒 <strong>Booking Assistance:</strong><br>1. Choose any travel package card (e.g. Goa, Munnar).<br>2. Click the <strong>'Book Now'</strong> button.<br>3. Review the overview, day-wise timeline, and testimonials.<br>4. Click <strong>'Accept Package & Book'</strong> at the bottom.<br>5. Fill out the 6-step Booking Wizard, make payment, and receive your confirmation receipt instantly!";
    }
    
    if (text.includes('itinerary') || text.includes('planner') || text.includes('plan')) {
        return "📅 <strong>AI Itinerary Planner:</strong><br>• Scroll up to the **AI Itinerary Planner** section.<br>• Select your starting location, destination, dates, budget profile (Budget, Mid-range, Luxury), travel type, and guests.<br>• Click <strong>'Generate AI Plan'</strong> to create a custom vertical day-by-day itinerary and interactive Leaflet route map instantly!";
    }
    
    if (text.includes('budget') || text.includes('price') || text.includes('cost')) {
        return "💰 <strong>Available Premium Packages & Pricing:</strong><br>• <strong>Jaipur:</strong> ₹5,999/person<br>• <strong>Munnar:</strong> ₹6,499/person<br>• <strong>Goa:</strong> ₹6,999/person<br>• <strong>Manali:</strong> ₹7,999/person<br>• <strong>Ladakh:</strong> ₹12,999/person<br>• <strong>Andaman:</strong> ₹14,999/person<br><br>👉 All prices are base rate. Booking includes flat 10% promo discounts!";
    }
    
    return "Thank you for asking! I can certainly help you with that. We offer six premium destinations (Goa, Manali, Jaipur, Andaman, Munnar, Ladakh). Tell me which of these you'd like to explore, or ask me how to generate an itinerary using our AI Planner!";
}

window.toggleAIChat = toggleAIChat;
window.sendQuickMessage = sendQuickMessage;
window.handleAIChatSubmit = handleAIChatSubmit;
