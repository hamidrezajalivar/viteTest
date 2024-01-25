const Header = ({title}:string) => {
    return ( 
        <header>
        <h1 title="header">{title}</h1>
        <h2 data-testId="header-2">header 2</h2>
        <section>
  <button
    role="spinbutton"
    aria-valuenow={5}
    aria-valuemin={0}
    aria-valuemax={10}
    aria-valuetext="medium"
  >
    Volume
  </button>
  <button
    role="spinbutton"
    aria-valuenow={3}
    aria-valuemin={0}
    aria-valuemax={10}
    aria-valuetext="medium"
  >
    Pitch
  </button>
</section>

        </header>
     );
}
 
export default Header;