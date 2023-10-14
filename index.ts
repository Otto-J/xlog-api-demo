import { createIndexer } from "crossbell";
import dotenv from "dotenv";
dotenv.config();
const indexer = createIndexer();

const Address = process.env.USER_ADDRESS as `0x${string}`;

const characterId = 53710;

console.log(Address);

// 获取角色信息
const getUserByAddress = async () => {
  const res = await indexer.character.getMany(Address);

  // console.log(res);
  const metadata = res.list[0].metadata;
  console.log(JSON.stringify(metadata, null, 2));
};

// getUserByAddress();

const getNotesByCharacterId = async (characterId: number) => {
  const res = await indexer.note.getMany({
    characterId,
    includeNestedNotes: false,
    limit: 10,
  });
  console.log(res);
};

// getNotesByCharacterId(characterId);
