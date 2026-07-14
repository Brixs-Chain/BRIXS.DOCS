import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Getting Started';
    const description = searchParams.get('description') || 'Learn how to build your first application on Brixs Chain.';
    
    // We will use the uploaded image as a placeholder for the right side illustration, 
    // although it contains text, it gives the exact structure requested.
    const illustrationUrl = 'https://docs.brixs.space/illustration.png';

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundColor: '#F8F9FA',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Main Container - Split Layout */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              backgroundImage: 'radial-gradient(circle at 25px 25px, #e5e7eb 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e5e7eb 2%, transparent 0%)',
              backgroundSize: '100px 100px',
            }}
          >
            {/* Left Content Area (65%) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '65%',
                height: '100%',
                padding: '80px',
                zIndex: 10,
              }}
            >
              {/* Top Branding */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '40px',
                }}
              >
                <img
                  src="https://www.brixs.space/full_logo_black_on_white.png"
                  alt="BRIXS Logo"
                  width={220}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Tag / Category Label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <div style={{ color: '#7C5CFF', marginRight: '10px', fontSize: 24 }}>✦</div>
                <div
                  style={{
                    color: '#7C5CFF',
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Developer Documentation
                </div>
              </div>

              {/* Title & Description */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 76,
                    fontWeight: 800,
                    color: '#111111',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    marginBottom: '24px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 400,
                    color: '#6B7280',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {description}
                </div>
              </div>

              {/* Footer text */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 'auto',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 20px',
                    backgroundColor: '#F3F4F6',
                    borderRadius: '30px',
                    color: '#111111',
                    fontWeight: 600,
                    fontSize: 22,
                  }}
                >
                  🌐 docs.brixs.space
                </div>
              </div>
            </div>

            {/* Right Decorative Area (35%) */}
            <div
              style={{
                display: 'flex',
                width: '35%',
                height: '100%',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
               {/* We render the uploaded illustration image here, cropped to the right side */}
               <img 
                 src={illustrationUrl}
                 style={{
                   position: 'absolute',
                   right: '-100px',
                   height: '120%',
                   objectFit: 'cover',
                   opacity: 0.9
                 }}
               />
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
