const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ADDRESS = '0x0b25521dFa86D6dda99eDbd65f383ED6051891a6';

module.exports = buildModule("uriERC721Module", (m) => {
  const storage = m.contract("uriERC721", [ADDRESS]);

  return { storage };
});