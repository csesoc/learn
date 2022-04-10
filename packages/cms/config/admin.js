module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd14f6da85f0a2630caacb6970d849d3d'),
  },
});
