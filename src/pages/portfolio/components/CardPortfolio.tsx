import React, { FC } from 'react'
import { PortfolioCards } from '../types/portfoliocard'

const CardPortfolio: FC <PortfolioCards> = ({
  properties
}) => {
  return (
    <div className='mx-4 bg-dark-blue'>
      <div>
        <img
          src={properties?.image?.files[0]?.file?.url}
        />
        <div>
          <h1>
            {properties?.name?.title[0]?.text?.content}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CardPortfolio
