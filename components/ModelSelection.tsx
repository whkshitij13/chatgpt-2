'use client'
import Select from 'react-select'
import useSWR from "swr"
const ModelSelection = () => {
  const fetchModels=()=>fetch('/api/getEngines').then(res=>res.json())
  const {data:models,isLoading}=useSWR('models',fetchModels)
  const{data:model,mutate:setModel}=useSWR('model',{
    fallbackData:'text-davinci-003'
  })
    return (
    <div className='mt-2'>
        <Select  className='mt-2'
        options={models?.modelOptions}
        defaultValue={model}
        isSearchable
        id="long-value-select" instanceId="long-value-select"
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
            control:(state) =>"bg-[#434654] border-[#434654]"
        }}
        onChange={(e)=>setModel(e.value)}
        placeholder={model}

        />
    </div>
  )
}

export default ModelSelection