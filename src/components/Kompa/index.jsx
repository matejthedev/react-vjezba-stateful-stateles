const Kompa = ({ greet, num, nick }) => {
  return (
    <div>
      <h1>Funkcijska Kompa { greet + "!" } i broj je {num + 10}  bla bla {nick}</h1>
    </div>
  );
};

export default Kompa;