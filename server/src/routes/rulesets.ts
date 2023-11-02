import express from 'express';
import { PrismaClient } from '@prisma/client';
import { isNumeric } from '../utils';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async function(req, res, next){
    const { query, filter } = req.query;

    if (!query || query === 'null' || (filter === 'rulesetId' && !isNumeric(query))) {
        const rulesets = await prisma.ruleset.findMany({
            orderBy: { rulesetId: 'asc' },
        });
        return res.json(rulesets);
    }

    const where = {};

    if (filter && filter !== 'null') {
        where[filter] = filter === 'rulesetId' ?
            { equals: BigInt(query) } :
            { contains: query, mode: 'insensitive' };
        const rulesets = await prisma.ruleset.findMany({
            where,
            orderBy: { rulesetId: 'asc' },
        });
        return res.json(rulesets);
    }

    where['OR'] = isNumeric(query) ?
        [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
            { rulesetId: { equals: BigInt(query) } },
        ] :
        [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
        ];
    const rulesets = await prisma.ruleset.findMany({
        where,
        orderBy: { rulesetId: 'asc' },
    });

    res.json(rulesets);
});

router.get('/:rulesetId', async function(req, res, next){
    const { rulesetId } = req.params;
    const ruleset = await prisma.ruleset.findUnique({
        where: { rulesetId: BigInt(rulesetId) },
    });
    res.json(ruleset);
});

router.put('/:rulesetId', async function(req, res, next){
    const { rulesetId } = req.params;
    const { name, description } = req.body;
    const ruleset = await prisma.ruleset.update({
        where: { rulesetId: BigInt(rulesetId) },
        data: {
            name,
            description,
        },
    });
    res.json(ruleset);
});

router.post('/', async function(req, res, next){
    const { name, description } = req.body;
    const ruleset = await prisma.ruleset.create({
        data: {
            organizationId: BigInt(1),
            name,
            description,
        },
    });
    res.json(ruleset);
});

router.delete('/:rulesetId', async function(req, res, next){
    const { rulesetId } = req.params;
    const ruleset = await prisma.ruleset.delete({
        where: { rulesetId: BigInt(rulesetId) },
    });
    res.json(ruleset);
});

export default router;
