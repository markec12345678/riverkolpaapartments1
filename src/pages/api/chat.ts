import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const GROQ_API_KEY = import.meta.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return new Response(
      JSON.stringify({ reply: 'AI chatbot is currently unavailable. Please contact Majda directly.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { message } = await request.json();

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Zelo zmogljiv model
        messages: [
          {
            role: 'system',
            content: `
              Ti si 'River Kolpa AI Concierge'. Pridno pomagaš gostom pri rezervacijah v apartmajih River Kolpa v Beli krajini, Slovenija.
              
              KLIJUČNE INFORMACIJE (uporabi samo te):
              - Lokacija: Griblje, Bela krajina, Slovenija (500m od reke Kolpe).
              - Kapaciteta: Do 7 gostov.
              - Cene: Poletje ~150€/noč (max), Zima ~100€/noč (max).
              - Ugodnosti: WiFi, TV, klima, zunanji žar, brezplačen parking, živali dovoljene.
              - Kontakt: Majda (040 858 732, majda.pezdirc@gmail.com).
              - Jezik: Odpove se v slovenščini, če je uporabnik piše slovensko, sicer v angleščini.
              
              BODI PRIJAZEN, KRATKE ODGOVORE in POZITIVEN.
            `
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    const data = await response.json();
    return new Response(JSON.stringify({ reply: data.choices[0].message.content }));
  } catch (error) {
    return new Response(JSON.stringify({ reply: 'Trenutno imam tehnične težave. Prosim kontaktirajte Majdo neposredno.' }));
  }
};
