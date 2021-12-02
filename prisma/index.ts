// 公式：https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries
// Zenn：https://zenn.dev/thirosue/books/49a4ee418743ed/viewer/89c2d4
import { PrismaClient } from '@prisma/client';
import { User } from '@prisma/client'; //

const prisma = new PrismaClient();

async function main() {
  // NOTE: 単純な検索（1件検索）
  // const alice = await prisma.user.findUnique({
  //   where: { email: 'alice@example.com' }
  // });
  // console.log(alice);
  // NOTE: 単純な検索（リスト検索）
  // const users = await prisma.user.findMany();
  // console.log(users);
  // NOTE: Join検索（ユーザ詳細）
  // const bob = await prisma.user.findUnique({
  //   where: { email: 'bob@example.com' },
  //   include: { posts: true }
  // });
  // console.log(bob);
  // Join検索（投稿一覧）
  // const posts = await prisma.post.findMany({
  //   where: {
  //     title: {
  //       startsWith: 'title'
  //     }
  //   },
  //   take: 5,
  //   orderBy: {
  //     id: 'asc'
  //   },
  //   include: { author: true }
  // });
  // console.log(posts);
  // NOTE: Native Query ［パラメータ埋め込み］
  // const email = 'alice@example.com';
  // const alice = await prisma.$queryRaw<User>(
  //   `SELECT * FROM "postgres"."User" WHERE "postgres"."User"."email" = '${email}';`
  // );
  // console.log(alice);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
