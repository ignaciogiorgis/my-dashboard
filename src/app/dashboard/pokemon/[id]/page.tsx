interface Props {
  params: { id: string };
}

export default function pokemonPage({ params }: Props) {
  return (
    <div>
      <h1>Hello Page pokemon{params.id}</h1>
    </div>
  );
}
