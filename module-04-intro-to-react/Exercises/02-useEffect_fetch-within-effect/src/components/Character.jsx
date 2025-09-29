function Character({ character }) {
  return (
    <div>
      <p>Uid: {character.uid}</p>
      <p>Name: {character.name}</p>
    </div>
  );
}

export default Character;
