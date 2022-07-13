
import './NavBar.css';
import CartWidget from './CartWidget';
function NavBar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href='/Inicio'>Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href='/products'>Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html">Contactanos</a>
          </li>
        </ul>
      </div>
      </div>
      </nav>
      <CartWidget/>
    </header>

  );
}

export default NavBar;