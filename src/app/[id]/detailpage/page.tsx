import { Suspense } from "react";
import { createClient } from '@supabase/supabase-js'
import { Database } from "@/supabase";
import DetailCss from './detailCss'

const supabaseUrl = 'https://fdygjithtwapwzewfxuc.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient<Database>(supabaseUrl, supabaseKey || '');
  
export default async function Page({
  params,
}: {
  params: { id: number };
}) {
  let { data: campaign, error } = await supabase.from("campaign").select("*").eq('id', params.id);
  // const data = await supabase.from("campaign").select("*").eq('id', params.id);
    return (
      <>
        <Suspense fallback={<>Loading...</>}>
        <DetailCss
        campaign={campaign[0]}  
        title={campaign[0].title}
        duration={campaign[0].duration}
        image_url={campaign[0].image_url}
        description={campaign[0].description}
        current_amount={campaign[0].current_amount}
        goal={campaign[0].goal}
        beneficiary={campaign[0].beneficiary}
        id={campaign[0].id}

        />
        </Suspense>
      </>
    );
};
