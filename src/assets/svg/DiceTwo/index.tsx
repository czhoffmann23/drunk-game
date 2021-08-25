type DiceProps = {
  w: string
  h: string
}

const DiceTwo: React.FC<DiceProps> = ({ w, h }) => {
  return (
    <svg
      width={w}
      height={h}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve">
      <path
        style={{ fill: '#FFFFFF' }}
        d="M55.552,508C27.128,508,4,484.872,4,456.448V55.552C4,27.128,27.128,4,55.552,4H456.44
      c28.432,0,51.552,23.128,51.552,51.552V456.44c0,28.432-23.128,51.552-51.552,51.552H55.552V508z"
      />
      <path
        style={{ fill: '#FFFFFF' }}
        d="M456.448,8C482.664,8,504,29.336,504,55.552V456.44c0,26.224-21.336,47.56-47.552,47.56H55.552
      C29.336,504,8,482.664,8,456.448V55.552C8,29.336,29.336,8,55.552,8H456.448 M456.448,0H55.552C24.872,0,0,24.872,0,55.552V456.44
      C0,487.128,24.872,512,55.552,512H456.44c30.688,0,55.56-24.872,55.56-55.552V55.552C512,24.872,487.128,0,456.448,0L456.448,0z"
      />
      <g>
        <circle style={{ fill: '#FF7888' }} cx="256" cy="133.256" r="45.256" />
        <circle style={{ fill: '#FF7888' }} cx="256" cy="378.72" r="45.256" />
      </g>
    </svg>
  )
}

export default DiceTwo
