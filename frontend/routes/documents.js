var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')
var jwt = require('jsonwebtoken')
var jwtKey = fs.readFileSync(path.resolve(__dirname, '../config/pspdfkit/jwt.pem'))

router.get('/:documentId', function (req, res, next) {
  var jwt = prepareJwt(req.params.documentId)
  var aiJwt = prepareAIAssistantJwt(req.params.documentId)
  res.render('documents/show', { documentId: req.params.documentId, jwt: jwt, aiJwt: aiJwt })
})

var prepareJwt = function (documentId) {
  var claims = {
    document_id: documentId,
    permissions: ['read-document', 'write', 'download'],
  }

  return jwt.sign(claims, jwtKey, {
    algorithm: 'RS256',
    expiresIn: 60 * 60, // 1hr, this will set the `exp` claim for us.
    allowInsecureKeySizes: true,
  })
}

const prepareAIAssistantJwt = function (documentId) {
  var claims = {
    document_ids: [documentId],
  }

  return jwt.sign(claims, jwtKey, {
    algorithm: 'RS256',
    expiresIn: 60 * 60, // 1hr, this will set the `exp` claim for us.
    allowInsecureKeySizes: true,
  })
}

module.exports = router
