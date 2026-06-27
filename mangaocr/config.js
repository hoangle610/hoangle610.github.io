// ========================================
// MangaOCR Configuration
// Fill in your Supabase and LemonSqueezy details
// ========================================

const CONFIG = {
  // Supabase Project
  // Get these from: https://supabase.com/dashboard → Project Settings → API
  SUPABASE_URL: 'https://peuhbshuecbapsjpzqks.supabase.co',           // e.g. https://abcdef.supabase.co
  SUPABASE_ANON_KEY: 'sb_publishable_WkCkLPlmn2jisK-RPAEYOw_tsmTNkzG', // e.g. eyJhbGciOiJIUzI1NiIs...

  // Set to true to use Test Mode URLs below
  USE_TEST_MODE: false,

  // LemonSqueezy Checkout URLs (LIVE)
  LS_CHECKOUT_URLS: {
    basic: 'https://visionflow-pro.lemonsqueezy.com/checkout/buy/45eabbcd-f830-4e15-af0c-8dc0c31cf36c',
    pro: 'https://visionflow-pro.lemonsqueezy.com/checkout/buy/36cb816c-84fd-4161-bbba-805f851518b6',
    premium: 'https://visionflow-pro.lemonsqueezy.com/checkout/buy/0faeb54b-daad-41a6-b499-327ed94e4e5d'
  },

  // LemonSqueezy Checkout URLs (TEST)
  LS_TEST_CHECKOUT_URLS: {
    basic: 'https://visionflow-pro.lemonsqueezy.com/checkout/buy/07b8c68e-3a67-463f-9a33-b5e9361a841a',
    pro: 'https://visionflow-pro.lemonsqueezy.com/checkout/buy/bd15db1a-1a67-4e82-bd80-b9adea8c282a',
    premium: 'https://visionflow-pro.lemonsqueezy.com/checkout/buy/b4b2e87b-07fe-48dd-8d1e-ae06d429d149'
  },

  // Quota limits
  FREE_DAILY_LIMIT: 30,
  PREMIUM_DAILY_LIMIT: 5000,
};
