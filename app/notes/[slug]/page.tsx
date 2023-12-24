const NoteDetail = ({params: {slug}}: { params: { slug: string } }) => {
  return (
    <main>
      <h1>Note Details: {slug}</h1>
    </main>
  )
}

export default NoteDetail;