import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { DateRange, DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

import { usePurchaseFrequency } from '../../queries'
import { IPurchaseFrequencyParams } from '../../types'
import { PATH } from '../../constants/routes'
import ErrorView from '../../components/ErrorView'

import Styled from './PurchaseFrequency.styles'
import Global from '../../global.styles'
import 'react-day-picker/style.css'
import Chart from '../../components/Chart'

const PurchaseFrequencyPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const [params, setParams] = useState<IPurchaseFrequencyParams>({
    from: from ?? '2024-07-01',
    to: to ?? '2024-07-31',
  })
  const { data, isLoading, error, refetch } = usePurchaseFrequency(params)

  const onSelect = (selected: DateRange) => {
    const { from, to } = selected
    const formattedFrom = format(from as Date, 'yyyy-MM-dd')
    const formattedTo = format(to as Date, 'yyyy-MM-dd')
    setParams({
      ...params,
      from: formattedFrom,
      to: formattedTo,
    })
    navigate(`${PATH.PURCHASE_FREQUENCY}?from=${formattedFrom}&to=${formattedTo}`)
  }

  const refresh = () => {
    refetch()
  }

  useEffect(() => {
    setParams({
      from: from ?? '2024-07-01',
      to: to ?? '2024-07-31',
    })
  }, [from, to])

  return (
    <Styled.Container>
      {error && <ErrorView onRefresh={refresh} message={error.message} />}
      <DayPicker
        disabled={isLoading || !!error}
        mode="range"
        startMonth={new Date('2024-07')}
        endMonth={new Date('2024-07')}
        onSelect={onSelect}
        required
        selected={{
          from: new Date(params.from as string),
          to: new Date(params.to as string),
        }}
      />
      {isLoading && <Global.LoadingSpinner />}
      {data && (
        <Styled.ChartContainer>
          <Chart data={data} />
        </Styled.ChartContainer>
      )}
    </Styled.Container>
  )
}

export default PurchaseFrequencyPage
