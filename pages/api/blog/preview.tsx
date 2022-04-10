const Preview = (req, res) => {
  res.setPreviewData({})
  res.redirect(req.query.route)
}

export default Preview

// *? use

// go to url: '/api/preview?route=...'

// export function getStaticProps(ctx) {
//   return {
//     props: {
//       content: ctx.preview ? content.draft : content.publish,
//       preview: ctx.preview, // optional
//     },
//   }
// }

// export default function Page({content}) {

// }
