import App from "./App"
import { renderWithProviders } from "./utils/test-utils"

test("App should have correct initial render", () => {
  renderWithProviders(<App />)
})
