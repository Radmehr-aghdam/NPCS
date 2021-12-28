

// This process will help to protect your test api and pages on server and 
// use it easly on localhost
const TEST_MODE = process.env.TEST_MODE

export default async function (req, res) {

  if (TEST_MODE == 'on') {

    res.status(200).json({ 'content': 'NPCS is work!' })

  } else {
    res.end()
  }

}
