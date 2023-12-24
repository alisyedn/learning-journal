import sql from "better-sqlite3";

export const DB = sql('logs.db')

// @formatter:off
DB.prepare(`DROP TABLE IF EXISTS Tags`).run()
DB.prepare(`DROP TABLE IF EXISTS Logs`).run()
DB.prepare(`
    CREATE TABLE IF NOT EXISTS Logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        image TEXT NOT NULL,
        excerpt TEXT NOT NULL,
        isFeatured NUMBERS NOT NULL,
        content TEXT NOT NULL
    )
`).run();

DB.prepare(`
    CREATE TABLE IF NOT EXISTS Tags (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        label TEXT NOT NULL UNIQUE,
        logId INTEGER NOT NULL,
        FOREIGN KEY(logId) REFERENCES Logs(id)
    )
`).run();

DB.prepare(` CREATE UNIQUE INDEX idx_logs_slugs ON Logs (slug)`).run()
DB.prepare(` CREATE UNIQUE INDEX idx_tags_label ON Tags (label)`).run()
// @formatter:on

export const INSERT_LOGS = `
    INSERT INTO Logs
    VALUES (null,
            @slug,
            @title,
            @date,
            @image,
            @excerpt,
            @isFeatured,
            @content)
`

export const INSERT_TAGS = `
    INSERT INTO Tags
    VALUES (null,
            @label,
            @logId)
`