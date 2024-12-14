import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const MAILERLITE_API_KEY = import.meta.env.MAILERLITE_API_KEY;
  const MAILERLITE_GROUP_ID = import.meta.env.MAILERLITE_GROUP_ID;

  if (!MAILERLITE_API_KEY) {
    return new Response(JSON.stringify({
      error: 'API key not configured'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return new Response(JSON.stringify({
        error: 'Email is required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email,
        groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : undefined
      })
    });

    const result = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({
        error: result.message || 'Failed to subscribe'
      }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({
      message: 'Successfully subscribed to newsletter'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return new Response(JSON.stringify({
      error: 'Internal server error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
