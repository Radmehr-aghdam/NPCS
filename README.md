# NPCS

> Nextjs + Prisma(mysql) + Chakra UI + SWR

## Installing:

    git clone https://github.com/Radmehr-aghdam/NPCS.git
    cd NPCS
    npm install

Then, create `.env.local` file and copy this to it:

    TEST_MODE=on
You can paste your local variables in `.env.local` for testing in local and real variables in `.env` file. Pay attention the `.env.local` file will NOT upload on server.

## Prisma with local env:

To run prisma commands with local variables, run these:

Migrate:

    npm run db:migrate

    
Reset:

    npm run db:reset

Generate:

    npm run db:generate

Studio:

    npm run db:studio

Pull:

    npm run db:pull

## Run the project:

    npm run dev

