import React from 'react'
import MathJax from 'react-mathjax-preview'
import { texify } from '../../utils'

export const Word = ({ word }) => <MathJax math={ texify(`w = ${ word || '1' }`) } />
