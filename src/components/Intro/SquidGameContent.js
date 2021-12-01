import React from 'react'

import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import './SquidGameContent.css'

import netflix_ceo from './imgs/netflix-ceo.jpg'


const data = {
  labels: ['Netflix', 'Amazon Prime', 'Disney Plus', 'HBO'],
  datasets: [
    {
      data: [203000000, 150000000, 86800000, 38000000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(255, 99, 132, 0.4)',
        'rgba(255, 99, 132, 0.4)',
        'rgba(255, 99, 132, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'number of streaming video subscribers worldwide in 2020 (unit: million)',
    },
    tooltip: {
      enabled: false
    },
    datalabels: {
      formatter: function(value, context) {
        return value / 1e6 + 'M';
      },
      "font": {
        size: 16
      }
    }
  },
  animation: {
    delay: 700, // change delay to suit your needs.
  },
  scales: {
    x: {
      ticks: {
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return value / 1e6 + 'M';
          }
      }
    }
  }
};


function SquidGameContent() {
  return (
    <div className="squidgame-container">
      <img
        src={netflix_ceo}
        alt="netflix CEO in squid game suit"
        className="netflix-ceo"  
      />
      <p className="squidgame-explanation"> 
        Reed Hastings, Netflix CEO, wore Squid Game tracksuits and reported 2021 third quarter earnings.
        According to the report, 142 million accounts watched the competition series for at least two minutes.
        That made it by far the most popular Netflix original. No other Netflix publication has exceeded 100
        million accounts.
      </p>
      <div className="streaming-video-graph">
        <Bar data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
      <p className="squidgame-explanation">
        Netflix subscriber growth was slowing down as competitors increased and coronavirus restrictions were
        loosened. Netflix predicted that 2021 profit would not be good. However, the Squid Game broke this prospect.
        According to Netflix's third quarter earnings release, the number of paid subscribers increased by 4.4
        million in one quarter.
      </p>
    </div>
  )
}

export default SquidGameContent
