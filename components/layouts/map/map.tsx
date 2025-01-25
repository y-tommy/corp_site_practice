import React from 'react'
import Iframe from "react-iframe";

const CorpMap = () => {
  return (
    <div className="flex justify-end flex-wrap">
      <Iframe
        url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13116.6036521698!2d-73.9908901006327!3d40.74734804467258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2z44Ko44Oz44OR44Kk44Ki44O744K544OG44O844OI44O744OT44Or!5e0!3m2!1sja!2sjp!4v1737623909196!5m2!1sja!2sjp"}
        width="800"
        height="600"
      />
    </div>
  )
}

export default CorpMap;