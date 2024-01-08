import React from 'react'

import { Button, Box  } from "react-bulma-components";

function Ideas() {
  return (
    <div>
      <div>Создание платформы для персонализированных образовательных путеводителей. Пользователи могут вводить свои интересы, уровень знаний и цели, а система, используя искусственный интеллект, предоставляет индивидуализированный план обучения с рекомендациями курсов, проектов и ресурсов.
      </div>
      <Box>
        <Button
          // color="is-info is-light"
          renderAs="span"
          className="noLeftBottomRadius button is-info is-light">
            dislike
        </Button>
        <Button
          color="info"
          className="noLeftBottomRadius button is-info is-light">
            like
        </Button>
      </Box>  
    </div>
  )
}

export default Ideas;
