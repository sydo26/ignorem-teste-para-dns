const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {

    const { hostname, params, httpVersion, headers, baseUrl, path, cookies, httpVersionMajor, httpVersionMinor, method, originalUrl, subdomains, url, protocol } = req
    return res.status(200).json({
        subdomains,
        protocol,
        url,
        hostname,
        httpVersionMajor,
        httpVersionMinor,
        method,
        originalUrl,
        cookies,
        path,
        baseUrl,
        params,
        httpVersion,
        headers,
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.info(`Servidor rodando na porta ${PORT}`)
})