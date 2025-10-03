import React from 'react';

function Hello({name, color, isSpecial}) {
   return (
      <div style={{color}}>
         {isSpecial && <b>*</b>}
         안녕하세요 {name}
      </div>
   )
}

Hello.defaultProps = {
   name: '이름 없음'
}

export default Hello;