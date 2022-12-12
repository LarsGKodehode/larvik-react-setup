// CSS
import './App.css'

/**
 * Main component
 */
function App() {
  return (
    <div className="App">
      <Navlink title="Home" text="some text here" />
      <Navlink title="About" text="some text here" />

      <ComponentWithChildren>
        <h3>Child 1</h3>
        <h3>Child 2</h3>
        <h3>Child 3</h3>
        <h3>Child 4</h3>
        <img
          src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
          alt=""
        />
      </ComponentWithChildren>
    </div>
  )
}

/**
 * Comp
 */
function Navlink(props) {
  // Destructuring
  const { title, text } = props

  return (
    <li>
      <a href="./">{title}</a>
    </li>
  )
}

function ComponentWithChildren(props) {
  console.log(props)
  return <div>{props.children[4]}</div>
}

export default App
