export async function getServerSideProps(context) {
  context.res.write(JSON.stringify(context))
  return {
    props: { ctxdata: context },
  }
}

export default Test
