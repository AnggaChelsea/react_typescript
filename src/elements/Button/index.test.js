import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'

test("should not allowed click button isdisable is present", () => {
  const { container } = render(<Button isdisable></Button>)
  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})