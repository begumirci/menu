import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://qpcsqewdiqaqdxaawcwx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwY3NxZXdkaXFhcWR4YWF3Y3d4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODU4NTA3NCwiZXhwIjoyMDU0MTYxMDc0fQ.huAFPKmyet8--iNP6W7uzT-j6kBtBI2pQgDjzGEjHCc'
);
